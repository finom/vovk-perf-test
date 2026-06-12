import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hso")
export default class HsoController {
  @operation({
    summary: "Get Hso",
  })
  @get()
  static getHso = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hso",
  })
  @post("{id}")
  static createHso = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

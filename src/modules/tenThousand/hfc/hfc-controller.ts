import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfc")
export default class HfcController {
  @operation({
    summary: "Get Hfc",
  })
  @get()
  static getHfc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hfc",
  })
  @post("{id}")
  static createHfc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aay")
export default class AayController {
  @operation({
    summary: "Get Aay",
  })
  @get()
  static getAay = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aay",
  })
  @post("{id}")
  static createAay = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

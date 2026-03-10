import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlc")
export default class HlcController {
  @operation({
    summary: "Get Hlc",
  })
  @get()
  static getHlc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hlc",
  })
  @post("{id}")
  static createHlc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

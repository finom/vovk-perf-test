import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhc")
export default class HhcController {
  @operation({
    summary: "Get Hhc",
  })
  @get()
  static getHhc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hhc",
  })
  @post("{id}")
  static createHhc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbi")
export default class HbiController {
  @operation({
    summary: "Get Hbi",
  })
  @get()
  static getHbi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hbi",
  })
  @post("{id}")
  static createHbi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

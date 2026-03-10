import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axx")
export default class AxxController {
  @operation({
    summary: "Get Axx",
  })
  @get()
  static getAxx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Axx",
  })
  @post("{id}")
  static createAxx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

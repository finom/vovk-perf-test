import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cch")
export default class CchController {
  @operation({
    summary: "Get Cch",
  })
  @get()
  static getCch = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cch",
  })
  @post("{id}")
  static createCch = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

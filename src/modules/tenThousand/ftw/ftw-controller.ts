import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftw")
export default class FtwController {
  @operation({
    summary: "Get Ftw",
  })
  @get()
  static getFtw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ftw",
  })
  @post("{id}")
  static createFtw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

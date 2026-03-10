import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzc")
export default class MzcController {
  @operation({
    summary: "Get Mzc",
  })
  @get()
  static getMzc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mzc",
  })
  @post("{id}")
  static createMzc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyy")
export default class CyyController {
  @operation({
    summary: "Get Cyy",
  })
  @get()
  static getCyy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cyy",
  })
  @post("{id}")
  static createCyy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dng")
export default class DngController {
  @operation({
    summary: "Get Dng",
  })
  @get()
  static getDng = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dng",
  })
  @post("{id}")
  static createDng = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

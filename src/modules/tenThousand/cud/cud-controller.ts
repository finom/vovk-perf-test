import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cud")
export default class CudController {
  @operation({
    summary: "Get Cud",
  })
  @get()
  static getCud = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cud",
  })
  @post("{id}")
  static createCud = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

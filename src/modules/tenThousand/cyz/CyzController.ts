import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyz")
export default class CyzController {
  @operation({
    summary: "Get Cyz",
  })
  @get()
  static getCyz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cyz",
  })
  @post("{id}")
  static createCyz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

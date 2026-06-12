import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cib")
export default class CibController {
  @operation({
    summary: "Get Cib",
  })
  @get()
  static getCib = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cib",
  })
  @post("{id}")
  static createCib = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

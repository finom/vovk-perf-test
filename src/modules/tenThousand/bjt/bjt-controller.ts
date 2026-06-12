import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjt")
export default class BjtController {
  @operation({
    summary: "Get Bjt",
  })
  @get()
  static getBjt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bjt",
  })
  @post("{id}")
  static createBjt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

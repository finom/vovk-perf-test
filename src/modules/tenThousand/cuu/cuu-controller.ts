import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cuu")
export default class CuuController {
  @operation({
    summary: "Get Cuu",
  })
  @get()
  static getCuu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cuu",
  })
  @post("{id}")
  static createCuu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

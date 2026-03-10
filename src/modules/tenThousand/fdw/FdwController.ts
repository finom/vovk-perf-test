import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdw")
export default class FdwController {
  @operation({
    summary: "Get Fdw",
  })
  @get()
  static getFdw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fdw",
  })
  @post("{id}")
  static createFdw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

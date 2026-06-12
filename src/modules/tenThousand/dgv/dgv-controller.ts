import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgv")
export default class DgvController {
  @operation({
    summary: "Get Dgv",
  })
  @get()
  static getDgv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dgv",
  })
  @post("{id}")
  static createDgv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

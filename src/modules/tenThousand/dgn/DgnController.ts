import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgn")
export default class DgnController {
  @operation({
    summary: "Get Dgn",
  })
  @get()
  static getDgn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dgn",
  })
  @post("{id}")
  static createDgn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgd")
export default class DgdController {
  @operation({
    summary: "Get Dgd",
  })
  @get()
  static getDgd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dgd",
  })
  @post("{id}")
  static createDgd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

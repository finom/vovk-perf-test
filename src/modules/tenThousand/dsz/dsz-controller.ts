import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsz")
export default class DszController {
  @operation({
    summary: "Get Dsz",
  })
  @get()
  static getDsz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dsz",
  })
  @post("{id}")
  static createDsz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

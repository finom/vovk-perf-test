import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxc")
export default class CxcController {
  @operation({
    summary: "Get Cxc",
  })
  @get()
  static getCxc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxc",
  })
  @post("{id}")
  static createCxc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

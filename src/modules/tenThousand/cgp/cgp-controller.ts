import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgp")
export default class CgpController {
  @operation({
    summary: "Get Cgp",
  })
  @get()
  static getCgp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cgp",
  })
  @post("{id}")
  static createCgp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

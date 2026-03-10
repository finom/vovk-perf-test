import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nld")
export default class NldController {
  @operation({
    summary: "Get Nld",
  })
  @get()
  static getNld = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nld",
  })
  @post("{id}")
  static createNld = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

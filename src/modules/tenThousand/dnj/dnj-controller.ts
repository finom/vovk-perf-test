import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnj")
export default class DnjController {
  @operation({
    summary: "Get Dnj",
  })
  @get()
  static getDnj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dnj",
  })
  @post("{id}")
  static createDnj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

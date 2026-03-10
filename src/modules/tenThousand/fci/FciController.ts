import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fci")
export default class FciController {
  @operation({
    summary: "Get Fci",
  })
  @get()
  static getFci = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fci",
  })
  @post("{id}")
  static createFci = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dci")
export default class DciController {
  @operation({
    summary: "Get Dci",
  })
  @get()
  static getDci = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dci",
  })
  @post("{id}")
  static createDci = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

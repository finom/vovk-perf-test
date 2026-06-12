import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("did")
export default class DidController {
  @operation({
    summary: "Get Did",
  })
  @get()
  static getDid = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Did",
  })
  @post("{id}")
  static createDid = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

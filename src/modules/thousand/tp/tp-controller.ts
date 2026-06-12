import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tp")
export default class TpController {
  @operation({
    summary: "Get Tp",
  })
  @get()
  static getTp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Tp",
  })
  @post("{id}")
  static createTp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

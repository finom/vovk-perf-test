import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcj")
export default class DcjController {
  @operation({
    summary: "Get Dcj",
  })
  @get()
  static getDcj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dcj",
  })
  @post("{id}")
  static createDcj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

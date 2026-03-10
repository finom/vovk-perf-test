import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtj")
export default class DtjController {
  @operation({
    summary: "Get Dtj",
  })
  @get()
  static getDtj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dtj",
  })
  @post("{id}")
  static createDtj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ncv")
export default class NcvController {
  @operation({
    summary: "Get Ncv",
  })
  @get()
  static getNcv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ncv",
  })
  @post("{id}")
  static createNcv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

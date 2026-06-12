import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmr")
export default class KmrController {
  @operation({
    summary: "Get Kmr",
  })
  @get()
  static getKmr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kmr",
  })
  @post("{id}")
  static createKmr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

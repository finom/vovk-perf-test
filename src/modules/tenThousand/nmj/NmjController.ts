import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmj")
export default class NmjController {
  @operation({
    summary: "Get Nmj",
  })
  @get()
  static getNmj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nmj",
  })
  @post("{id}")
  static createNmj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

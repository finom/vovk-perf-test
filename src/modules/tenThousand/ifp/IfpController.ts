import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifp")
export default class IfpController {
  @operation({
    summary: "Get Ifp",
  })
  @get()
  static getIfp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ifp",
  })
  @post("{id}")
  static createIfp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

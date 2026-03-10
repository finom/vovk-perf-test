import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdm")
export default class KdmController {
  @operation({
    summary: "Get Kdm",
  })
  @get()
  static getKdm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kdm",
  })
  @post("{id}")
  static createKdm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

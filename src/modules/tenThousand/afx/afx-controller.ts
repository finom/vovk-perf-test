import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afx")
export default class AfxController {
  @operation({
    summary: "Get Afx",
  })
  @get()
  static getAfx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Afx",
  })
  @post("{id}")
  static createAfx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrm")
export default class HrmController {
  @operation({
    summary: "Get Hrm",
  })
  @get()
  static getHrm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hrm",
  })
  @post("{id}")
  static createHrm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

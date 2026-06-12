import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrp")
export default class HrpController {
  @operation({
    summary: "Get Hrp",
  })
  @get()
  static getHrp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hrp",
  })
  @post("{id}")
  static createHrp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

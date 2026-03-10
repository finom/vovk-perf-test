import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrx")
export default class HrxController {
  @operation({
    summary: "Get Hrx",
  })
  @get()
  static getHrx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hrx",
  })
  @post("{id}")
  static createHrx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

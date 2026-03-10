import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrv")
export default class HrvController {
  @operation({
    summary: "Get Hrv",
  })
  @get()
  static getHrv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hrv",
  })
  @post("{id}")
  static createHrv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

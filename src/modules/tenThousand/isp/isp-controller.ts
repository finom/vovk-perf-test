import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isp")
export default class IspController {
  @operation({
    summary: "Get Isp",
  })
  @get()
  static getIsp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Isp",
  })
  @post("{id}")
  static createIsp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

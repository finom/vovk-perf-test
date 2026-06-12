import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epk")
export default class EpkController {
  @operation({
    summary: "Get Epk",
  })
  @get()
  static getEpk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Epk",
  })
  @post("{id}")
  static createEpk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

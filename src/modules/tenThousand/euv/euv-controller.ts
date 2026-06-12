import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("euv")
export default class EuvController {
  @operation({
    summary: "Get Euv",
  })
  @get()
  static getEuv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Euv",
  })
  @post("{id}")
  static createEuv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

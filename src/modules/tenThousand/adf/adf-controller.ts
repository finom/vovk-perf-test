import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adf")
export default class AdfController {
  @operation({
    summary: "Get Adf",
  })
  @get()
  static getAdf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Adf",
  })
  @post("{id}")
  static createAdf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

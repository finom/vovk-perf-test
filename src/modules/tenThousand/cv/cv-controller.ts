import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cv")
export default class CvController {
  @operation({
    summary: "Get Cv",
  })
  @get()
  static getCv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cv",
  })
  @post("{id}")
  static createCv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

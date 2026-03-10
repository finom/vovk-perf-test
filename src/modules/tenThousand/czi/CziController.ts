import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czi")
export default class CziController {
  @operation({
    summary: "Get Czi",
  })
  @get()
  static getCzi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Czi",
  })
  @post("{id}")
  static createCzi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

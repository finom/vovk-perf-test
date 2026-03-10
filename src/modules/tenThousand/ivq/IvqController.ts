import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivq")
export default class IvqController {
  @operation({
    summary: "Get Ivq",
  })
  @get()
  static getIvq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ivq",
  })
  @post("{id}")
  static createIvq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

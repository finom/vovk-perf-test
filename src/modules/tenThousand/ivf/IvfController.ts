import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivf")
export default class IvfController {
  @operation({
    summary: "Get Ivf",
  })
  @get()
  static getIvf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ivf",
  })
  @post("{id}")
  static createIvf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

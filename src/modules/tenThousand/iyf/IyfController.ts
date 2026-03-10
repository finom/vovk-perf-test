import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyf")
export default class IyfController {
  @operation({
    summary: "Get Iyf",
  })
  @get()
  static getIyf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iyf",
  })
  @post("{id}")
  static createIyf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

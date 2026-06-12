import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqf")
export default class IqfController {
  @operation({
    summary: "Get Iqf",
  })
  @get()
  static getIqf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iqf",
  })
  @post("{id}")
  static createIqf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibz")
export default class IbzController {
  @operation({
    summary: "Get Ibz",
  })
  @get()
  static getIbz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ibz",
  })
  @post("{id}")
  static createIbz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

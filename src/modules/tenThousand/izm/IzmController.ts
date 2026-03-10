import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izm")
export default class IzmController {
  @operation({
    summary: "Get Izm",
  })
  @get()
  static getIzm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Izm",
  })
  @post("{id}")
  static createIzm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

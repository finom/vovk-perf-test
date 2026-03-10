import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izb")
export default class IzbController {
  @operation({
    summary: "Get Izb",
  })
  @get()
  static getIzb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Izb",
  })
  @post("{id}")
  static createIzb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

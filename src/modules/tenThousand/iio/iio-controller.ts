import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iio")
export default class IioController {
  @operation({
    summary: "Get Iio",
  })
  @get()
  static getIio = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iio",
  })
  @post("{id}")
  static createIio = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
